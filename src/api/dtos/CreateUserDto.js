class CreateUserDto {
	constructor(obj) {
		this.login = obj.login;
		this.password = obj.password;
	}

	isValid() {
		return Boolean(this.login) && Boolean(this.password);
	}

	static isValid(obj) {
		return new CreateUserDto(obj).isValid();
	}
}

module.exports = CreateUserDto;