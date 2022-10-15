import 'dart:ffi';

class User {
  String? name, password, phoneNo, department, emailAddress;
  bool? isSuperUser, isVerified, isPlaced;
  User({
    this.name,
    this.password,
    this.phoneNo,
    this.emailAddress,
    this.department,
    this.isSuperUser = false,
    this.isVerified = true,
    this.isPlaced,
  });
}
