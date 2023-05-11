import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_iot as iot } from 'aws-cdk-lib';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class IotStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const iotThing = new iot.CfnThing(this, 'HabitatMonitor', /* all optional props */ {
      attributePayload: {
        attributes: {
          attributesKey: 'attributes',
        },
      },
      thingName: 'HabitatMonitor',
    });
  }
}
