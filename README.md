# Result Management System

The Result Management System is a web application developed using the Angular framework. It enables teachers to input individual results into the portal and provides a secure login feature allowing students to access their results by entering their email and roll number. The system utilizes a fake JSON server API for storing the data.

## Features

- **Teacher Portal**: Teachers can input individual student results into the system.
- **Student Login**: Students can securely log in to access their results using their email and roll number.
- **Results Display**: Upon successful login, students can view their results.

## Installation and Setup

1. **Clone Repository**:
git clone https://github.com/shailya123/Result-Management.git


2. **Backend Setup**:
- Navigate to the `backend` directory.
- Start the JSON server:
  ```
  json-server --watch db.json
  ```

3. **Frontend Setup**:
- Navigate to the `frontend` directory.
- Install dependencies:
  ```
  npm install
  ```
- Run Angular application:
  ```
  ng serve
  ```

4. **Access the Application**:
- Open your browser and visit `http://localhost:4200`.

## Usage

1. **Teacher Input**:
- Teachers can log in to the portal and input individual student results.

2. **Student Access**:
- Students can log in using their name and roll number to access their results.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) before submitting pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
