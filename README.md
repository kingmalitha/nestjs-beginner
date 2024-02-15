<!-- NESTJS STARTER -->

# NestJS

NestJS is a framework for building efficient, reliable and scalable server-side applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

## Why NestJS?

- **Modular Architecture**: Nest.JS stands out due to its modular architecture. Instead of writing lengthy code, you can import and use pre-built libraries, making development more efficient. This modularity allows for scalability and consistent maintenance of the source code.
- **TypeScript Integration**: Nest.JS is written in TypeScript, which provides optional static typing and improved code readability. TypeScript’s type system helps catch errors at compile time, safeguarding your code and reducing runtime issues.
- **Dependency Injection**: Nest.JS uses dependency injection, making it easier to manage dependencies and ensuring that your application remains modular and scalable. This approach promotes cleaner code and better separation of concerns.
- **Built on Node.js**: Nest.JS leverages the asynchronous, event-driven nature of Node.js, providing a robust and reliable platform for developing web applications.
- **Rich Ecosystem**: Nest.JS offers a rich ecosystem with features like REST APIs, MVC applications, GraphQL, Web Sockets, and CRON jobs. It’s versatile and adaptable to various use cases.

## NESTJS CLI

**Nest CLI** (Command-Line Interface) is a powerful tool for managing your Nest applications. It provides a set of commands that help you scaffold, build, and maintain your projects. The Nest CLI embodies best practices and encourages well-structured apps.

1. **`nest new <projectName>`** or **`nest n <projectName>`**: Creates a new Nest project. It scaffolds the initial project structure, sets up configuration files, and installs necessary dependencies.

2. **`nest generate <schematic>`** or **`nest g <schematic>`**: Generates various components for your application, such as controllers, modules, services, and more. For example:

   - `nest generate controller <name>`: Creates a new controller.
   - `nest generate module <name>`: Generates a new module.
   - `nest generate service <name>`: Creates a new service.
   - `nest generate resource <name>`: Generates a new resource (controller and service together with default CRUD methods).

And many more.

## NESTJS FUNDAMENTALS

### Controllers

- **Controllers** are responsible for handling incoming requests and returning responses to the client. They are the entry points for your application and are bound to specific routes.

- **Routing**: Controllers use decorators to define routes. These decorators are used to specify the request method and the URL path. For example, `@Get()`, `@Post()`, `@Put()`, `@Delete()`, etc.

- **Request and Response**: Controllers have access to the request and response objects, which can be used to read incoming data and send responses back to the client.

### Providers

- **Providers** are a fundamental concept in Nest. They are used to define and manage various types of dependencies, such as services, repositories, factories, helpers, and so on.

- **Services**: Services are a type of provider that can be injected into other components, such as controllers or other services. They encapsulate the business logic of your application and can be reused across different parts of your codebase.

- **Dependency Injection**: Nest uses a powerful dependency injection system to manage the creation and sharing of instances of providers. This makes it easy to manage dependencies and promotes modularity and reusability.

### Modules

- **Modules** are used to organize the application structure into cohesive blocks. They are a way to group related components, such as controllers, services, and other providers, into a single unit.

- **Feature Modules**: Nest encourages the use of feature modules to encapsulate related functionality. This helps to keep the codebase organized and maintainable.

- **Root Module**: The root module is the entry point of your application. It is responsible for bootstrapping the application and setting up the initial configuration.

### Middleware

- **Middleware** is a function that has access to the request and response objects. It can modify the request and response, terminate the request-response cycle, or call the next middleware in the stack.

- **Global Middleware**: Middleware can be applied globally to all routes or to specific routes. This allows you to perform common tasks, such as logging, authentication, error handling, and more.

### Exception Filters

- **Exception filters** are used to catch exceptions that are thrown during the execution of a request. They can be used to handle errors and return custom error responses to the client.

- **Error Handling**: Exception filters provide a way to handle errors in a centralized and consistent manner. They can be used to catch and process different types of errors, such as HTTP errors, validation errors, database errors, and more.

### Pipes

- **Pipes** are used to transform and validate data before it is processed by the application. They can be used to perform data transformation, data validation, and error handling.

- **Validation**: Pipes can be used to validate incoming data against predefined rules. This helps to ensure that the data is in the correct format and meets the required criteria.

- **Data Transformation**: Pipes can be used to transform incoming data into the desired format. This can be useful for converting data types, normalizing data, and more.

### Guards

- **Guards** are used to control access to certain parts of the application. They can be used to restrict access based on various criteria, such as user roles, permissions, and more.

- **Authentication**: Guards can be used to protect routes and endpoints by requiring users to be authenticated. This helps to secure sensitive parts of the application and prevent unauthorized access.

- **Authorization**: Guards can be used to control access based on user roles and permissions. This allows you to restrict access to certain resources based on the user's privileges.

## READ MORE

- [NestJS Official Documentation](https://docs.nestjs.com/)
