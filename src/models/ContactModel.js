export class ContactModel {
  id = "";
  fullName = "";
  firstName = "";
  lastName = "";
  phoneNumber = "";
  email = "";
  role = "";
  tags = "";
  company = "";
  address = "";

  constructor(obj) {
    if (!obj) {
      return this;
    }

    this.id = obj.id;
    this.fullName = `${obj.first_name} ${obj.last_name}`;
    this.firstName = obj.first_name;
    this.lastName = obj.last_name;
    this.phoneNumber = obj.phone_number;
    this.email = obj.email;
    this.role = obj.role;
    this.tags = obj.tags;
    this.company = obj.company;
    this.address = obj.address;
  }
}
