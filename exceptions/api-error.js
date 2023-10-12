module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedErorr() {
        return new ApiError(401, "User is not authorized");
    }

    static Badrequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
}