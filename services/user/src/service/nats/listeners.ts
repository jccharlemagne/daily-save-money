import nats, { Subscription } from "@jccharlemagne/nats";
import userRepository from "../../repository/user";

const create = async (subscription: Subscription) => {
  console.log(`🦻  Listening for ${subscription.getSubject()} requests...`);

  for await (const message of subscription) {
    const { email, name, picture } = nats.jsonDecode<{
      email: string;
      name?: string;
      picture?: string;
    }>(message.data);

    console.log(`➕  Creating user with email ${email}...`);

    const user = userRepository.initiate(name || "", email, picture || "");
    await user.save();

    message.respond(nats.jsonEncode(user));
  }
};

const findByEmail = async (subscription: Subscription) => {
  console.log(`🦻  Listening for ${subscription.getSubject()} requests...`);

  for await (const message of subscription) {
    const { email } = nats.jsonDecode<{ email: string }>(message.data);
    console.log(`🔍  Searching user with email ${email}...`);

    const user = await userRepository.find(email);

    if (!user) {
      console.error(`❌  User with email ${email} not found !`);
      message.respond(nats.jsonEncode(null));
      continue;
    }

    message.respond(nats.jsonEncode(user));
  }
};

export default {
  create,
  findByEmail,
};
