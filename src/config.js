export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-jj-bucket",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://adw5e04uz2.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UyuPRctCe",
    APP_CLIENT_ID: "7q7qv427394a5cgdbh9pqjoj0k",
    IDENTITY_POOL_ID: "us-east-1:9ac1555e-788e-4b5f-abb6-0e50051a9915",
  },
};
