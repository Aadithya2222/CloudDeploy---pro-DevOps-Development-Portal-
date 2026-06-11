import json
import uuid
import boto3
from datetime import datetime

dynamodb = boto3.resource("dynamodb")

table = dynamodb.Table("deployment-requests")

def lambda_handler(event, context):

    body = json.loads(event["body"])

    deployment_id = str(uuid.uuid4())

    item = {
        "deploymentId": deployment_id,
        "repository": body["repository"],
        "branch": body["branch"],
        "environment": body["environment"],
        "status": "PENDING",
        "createdAt": datetime.utcnow().isoformat()
    }

    table.put_item(Item=item)

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps(item)
    }