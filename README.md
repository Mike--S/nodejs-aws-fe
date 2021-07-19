This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment info

[S3-website](http://shop-app-dev.s3-website-us-east-1.amazonaws.com/)<br />
[CloudFront URL](https://d109lgrwmvd06l.cloudfront.net)

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run sls:domainInfo`

Shows the information about current domain that is used for deployment

### `npm run sls:inv`

Ivalidates cache for distribution

### `npm run sls:cf:build:deploy`

Updates client public build, creates distribution, deploys client (invalidation is executed automatically using serverless-cloudfront-invalidate plugin)
