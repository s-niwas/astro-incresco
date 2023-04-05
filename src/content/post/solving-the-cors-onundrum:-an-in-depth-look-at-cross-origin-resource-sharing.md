---
publishDate: 2023-03-15T00:00:00Z
title: "Solving the CORS Conundrum : An In-Depth Look at Cross-Origin Resource Sharing"
description: Cross-Origin Resource Sharing (CORS) is a crucial aspect of modern web development, but it can also be a source of frustration for developers. This comprehensive guide will provide you with a deep understanding of CORS, including its security implications, its necessity, and how to configure it in API Gateway using the Serverless Framework. By understanding the nuances of CORS, developers can enable secure, efficient cross-domain requests and ensure a seamless user experience.
excerpt: Cross-Origin Resource Sharing (CORS) is a crucial aspect of modern web development, but it can also be a source of frustration for developers. This article offers a comprehensive overview of CORS, including its various types, its security implications, and practical instructions for configuring it in API Gateway using the Serverless Framework.
image: https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-1.png
category: Tutorials
tags:
  - CORS
  - AWS
  - API Gateway
  - Serverless Framework
  - Security
  - Cross origin requests
author: Premsankar Subramaniyam
authorRole: Senior Engineering Manager
authorAvatar: https://media.licdn.com/dms/image/D5603AQFXFbsrhEdrBQ/profile-displayphoto-shrink_400_400/0/1679907006012?e=1685577600&v=beta&t=NVevuxrLl-Bmkqe5mPnjXI_W44OzJGOjcS93VXtC_OU
authorLinkedinUrl: https://www.linkedin.com/in/premsankars/
---

<p align="center">
  <img src="https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-1.png" alt="CORS banner"/>
</p>

If you're a backend developer, you may have encountered this scenario before: you test your API endpoints using Postman, Swagger, or another tool, and everything seems to be working smoothly. However, once the frontend developer starts consuming the API, they report that they're getting CORS errors.

In an effort to make the frontend developer happy, you may have enabled the `Access-Control-Allow-Origin` header with a value of `"*"` to allow requests from any origin. While this approach might solve the problem temporarily, it can also create security vulnerabilities and potentially expose sensitive data to unauthorized parties.

In this article, we'll take a comprehensive look at CORS in the context of AWS API Gateway and explore best practices for configuring CORS settings to ensure both security and accessibility. We will go through each section in detail,

1.  What is CORS ?
2.  Why CORS is needed ?
3.  Type of browser requests
4.  How to configure CORS in API Gateway using Serverless Framework ?

## What is CORS ?

As per MDN definition,
**Cross-Origin Resource Sharing (CORS)** is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

Let's break it down,

- Frontend web application typically hosted in the server and is configured with a domain, ex: xyz.com
- The data is stored in the backend database and an API is exposed to access data from the database and consider, this API is hosted in a domain abc.com
- Now, abc.com should allow a particular request (GET, POST etc) coming from xyz.com and deny request from any other domain
- Also, if the frontend application is also hosted in abc.com, then the domain assumes it be part of it and will allow the request to consume the resource

Cross-Origin Resource Sharing (CORS) is a mechanism that enables web browsers to securely access resources from a server that is located on a different domain. When a web page makes a request to a server that is not in the same domain as the page, the browser typically blocks the request to prevent cross-site scripting (XSS) attacks. CORS provides a way for web developers to specify which domains are allowed to access the resources on their server and under what circumstances.

![](https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-2.png)

## Why CORS is needed ?

In earlier days, as pretty much all of the applications are monolithic, which means both the client and server communications from the same origin/domain. With the advent of microservices and open API, the need arises for the client to access resources from different domains or in other words, the server caters to the requests from different domains.

CORS ensures the application is

### 1. Secured

Allowing cross-origin requests can be a security risk because it allows websites to access resources from other domains that may not be trustworthy. For example, a malicious website can use Javascript to inject and make request to access resources which is not intended to be shared.

### 2. Web application functions properly

All browsers in general follow a ** Same Origin Policy ** as a secure mechanism to control Cross Origin request forgery. Without setting up CORS, the web application will not function properly, as it will not be able to fetch data from an API hosted in other domain. By setting up CORS rules, developers can allow the web page to access the API's resources while preventing other domains from making unauthorized requests.

## Types of browser requests

Not all the requests created from the browser are equal, there are several types of it.

1. **Simple Requests:**
   The simplest type of CORS request is a "simple request". These requests are made using the HTTP methods GET, HEAD, or POST, and the Content-Type header is restricted to a small set of values. For a simple request to be successful, the server must respond with an Access-Control-Allow-Origin header that explicitly allows the requesting domain.
2. **Preflighted Requests:**
   If a request does not meet the criteria for a simple request, it is considered a "preflighted request". Preflighted requests are sent using the OPTIONS method and include an additional set of headers that describe the actual request that will be made. The server must respond with an Access-Control-Allow-Origin header, as well as an Access-Control-Allow-Methods header that lists the HTTP methods that are allowed for the requested resource.

   ![](https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-3.png)

3. **Credentialed Requests:**
   By default, CORS requests are not sent with cookies or authentication headers. However, if a request needs to include cookies or authentication information, it is considered a "credentialed request". To make a credentialed request, the client must set the withCredentials property to true on the XMLHttpRequest object or fetch() request. The server must respond with an Access-Control-Allow-Credentials header that explicitly allows the sending of credentials.
4. **Non-CORS Requests**
   Finally, it's worth noting that not all requests are subject to CORS restrictions. Requests made from the same origin as the server hosting the resource do not need to be CORS requests, as they are not subject to the same security restrictions. Similarly, requests made using the JSONP technique are not subject to CORS restrictions, as they are not true cross-domain requests.

## How to configure CORS in API Gateway using Serverless Framework ?

In this example, let us work with an AWS Lambda which is exposed as an HTTP API through the AWS API Gateway. We will not be getting into how to create a Lambda and we will just focus on the configurations to be done in the serverless.yaml and the code needed to allow the CORS requests processed successfully by the browser.

The serverless.yaml setting configurations for a simple helloWorld function are as below,

![](https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-4.png)

Once this function is deployed in the AWS, we can see the lambda function created along with the API gateway where a GET endpoint for the same function is exposed via the API gateway.

**_Configuration details:_**

In the above configuration,

- **events** section - has the settings related the http event for the lambda.
  `method: get` indicates that the allowed HTTP methods are OPTIONS and GET. OPTIONS method will be allowed by default.
- **cors** section - has the settings related to the CORS communications.

  ![](https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-5.png)

  - https://\*.increscotech.com - indicates that the request origin can be from any of the subdomains of increscotech.com
  - http://localhost:3000 - indicates only localhost:3000 is allowed with http scheme

  ![](https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-6.png)

  The **accesstoken** under **headers** indicates that only this custom header is allowed in the requests.

  `allowCredentials:true` setting permits the server to process the credentialed requests.

All these settings are used in the response for a preflight request. Any mismatch in the values sent in request headers, result in the CORS error.

### Code for Response Headers :

As the lambda function will be exposed through a lambda proxy, the response would be passed across from the API Gateway as a passthrough. Therefore our lambda function needs to return the Access-Control-Allow-Origin value when there is an actual request. Our lambda code would have the following logic to take care of this.

![](https://increscotech.com/blogimages/solving-the-cors-conundrum:-an-in-depth-look-at-cross-origin-resource-sharing-7.png)

## Summary:

1. CORS is a security mechanism where requests are allowed from authorized origins and responses are rendered for the same.
2. 3 types of CORS requests - Simple requests, Preflighted requests and Credentialed requests.
3. For a CORS request to be processed successfully, the APIs need to be configured at the server side with the settings for the Response headers.
