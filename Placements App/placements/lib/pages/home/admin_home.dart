import 'package:flutter/material.dart';
import 'package:placements/pages/home/admin_chat.dart';

class AdminHome extends StatefulWidget {
  const AdminHome({super.key});

  @override
  State<AdminHome> createState() => AdminHomeState();
}

class AdminHomeState extends State<AdminHome> {

  @override
  Widget build(BuildContext context) {
    Navigator.push(context, MaterialPageRoute(builder: (context) => const AdminChat()));
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Admin - Home"),
          centerTitle: true,
        ),
        body: Text("HI"),
      ),
    );
  }
}
