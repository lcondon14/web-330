const RequiredField = require("./required-field");
const FloatField = require("./float-field");
const FloatMinField = require("./float-min-field");
const FloatMaxField = require("./float-max-field");
const FloatField = require("./float-field");
const FloatMinField = require("./float-min-field");
const FloatMaxField = require("./float-max-field");

class Validator {
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    addRequiredField() {
        const requiredField = new RequiredField(this.name, this.field);
        this.validators.push(requiredField);
    }

    addRequiredFloatField() {
        const FloatField = new FloatField(this.name, this.field);
        this.validators.push(floatField);
    }

    addFloatMinField(min) {
        const FloatMinField = new FloatMinField(this.name, this.field, min);
        this.validators.push(floatMinField);
    }

    addFloatMaxField(max) {
        const FloatMaxField = new FloatMaxField(this.name, this.field,max);
    }

    validate() {
        for (const validator of this.validators) {
            if (!validator.validate()) {
                this.message.push(validator.getMessage());
                return false;
            }
        }
        return true;
    }

    getMessages() {
        return this.messages;
    }
}

module.exports = Validator;