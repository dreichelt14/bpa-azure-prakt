//read azure credentials
import { config } from "dotenv";
config({ path: ".env" });

import {
  EventHubConsumerClient,
  EventHubProducerClient,
} from "@azure/event-hubs";

async function main() {
  console.log("---Start processing Events---")
  //Get consumer connection settings
  const { CONNECTION_CONSUMER, CONSUMER_GROUP } = process.env;
  /**
   * @todo create Consumer instance
   */
  const consumer = undefined;

  //Get producer connection settings
  const { CONNECTION_PRODUCER } = process.env;
  /**
   * @todo create Producer instance
   */
  const producer = undefined;

  /**
   * @todo Subscribe to Temperature - Event Hub and evaluate incoming Events
   * @todo Emit new Events to Temperature-Warning Event Hub
   */
}

main().catch((err) => {
  console.error("Error occurred: ", err);
});
