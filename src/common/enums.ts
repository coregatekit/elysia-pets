enum STANDARD_MESSAGE {
	HEALTH_CHECK = "I'm fine, 괜찮아 😊",
  SUCCESS = 'Success',
}

enum ERROR_MESSAGE {
	NOT_IMPLEMENTED = 'Not implemented',
}

enum HTTP_STATUS {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
}

export { STANDARD_MESSAGE, ERROR_MESSAGE, HTTP_STATUS };
