## Technical Summary For Financial Assistance Scheme Management System

### Architecture

- Backend: Node.js 22 with Express.js 4.19
- API: RESTful design
- Data Storage: MySQL 9.0 with Sequelize 6.37

### API Endpoints

| Method | Path                                 | Purpose                                                    |
| :----- | :----------------------------------- | :--------------------------------------------------------- |
| POST   | /login                               | Authenticate user                                          |
| GET    | /api/applicants                      | Get all applicants                                         |
| POST   | /api/applicants                      | Create a new applicant                                     |
| GET    | /api/schemes                         | Get all schemes                                            |
| GET    | /api/schemes/eligible?applicant={id} | Get all schemes that an applicant is eligible to apply for |
| GET    | /api/applications                    | Get all applications                                       |
| POST   | /api/applications                    | Create a new application                                   |

### Key Data Flow Paths

1. Authenticate user → POST /login
2. Create a new application with a new applicant
   1. Create a new applicant → POST /api/applicants
   2. Getting all applicants → GET /api/applicants
   3. Get all schemes → GET /api/schemes
   4. Get all schemes that an applicant is eligible to apply for → GET /api/schemes/eligible?applicant={id}
   5. Create a new application → POST /api/applications
   6. Get all applications → GET /api/applications

### Key Technical Decisions

**Stateless Backend Architecture**

- Each request is independent and self-contained
- Benefits: Enhanced scalability, reliability, and easier management

**Layered Architecture**

- Improves modularity and maintainability
- Key layers:
  - API → Middlewares → Routes → Handlers (with DTOs) → Use Cases → Database

**MySQL with Sequelize ORM**

- Simplifies database interactions
- Enhances productivity and future flexibility
- Example: Easier database migration without major code rewrites

**JWT API Protection**

- Ensures secure authentication and authorization
- Enhances data security and access control
- User identification via JWT payload

**Docker Containers**

- Package apps and dependencies in isolated environments
- Simplifies deployment
- Ensures consistency across systems

### Future Roadmap

**Customizable Rule-Based System**

- Allows users to define and adjust eligibility schemes
- Benefits:
  - Flexible decision-making
  - Adaptable to specific financial assistance requirements

**Database Transactions**

- Groups multiple operations into a single unit
- Ensures data integrity and consistency
- Example: Creating a new application with a new applicant

**Role-Based Access Control (RBAC)**

- Manages permissions by assigning roles to users
- Key advantages:
  - Enhanced security
  - Simplified administration

**Unit Testing**

- Verifies individual code components
- Improves software quality by:
  - Ensuring each part functions as intended
  - Catching errors early in development

These improvements boost the application's security, performance, maintainability, and usability, while also setting a strong foundation for future development and scaling.

### Running The Project

1. Run `docker compose up` in the project's root directory after cloning the repository.
2. Import `postman.json` into the Postman app.
