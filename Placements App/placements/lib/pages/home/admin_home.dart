import 'package:flutter/material.dart';
import 'package:placements/pages/home/admin_chat.dart';
import 'package:placements/pages/home/admin_profile.dart';

class AdminHome extends StatefulWidget {
  const AdminHome({super.key});

  @override
  State<AdminHome> createState() => AdminHomeState();
}

class AdminHomeState extends State<AdminHome> {
  @override
  int _selectedIndex = 0;
  List<Widget> page = [AdminChat(), AdminProfile()];
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    //Navigator.push(context, MaterialPageRoute(builder: (context) => const AdminChat()));
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Admin - Home"),
          centerTitle: true,
        ),
        body: Text("Hi"),
        bottomNavigationBar: BottomNavigationBar(
          items: const [
            BottomNavigationBarItem(
                icon: Icon(Icons.chat_bubble),
                label: 'Chat',
                backgroundColor: Colors.purple),
            BottomNavigationBarItem(
                icon: Icon(Icons.person),
                label: 'Profile',
                backgroundColor: Colors.purple),
          ],
          currentIndex: _selectedIndex,
          selectedItemColor: Colors.amber,
          onTap: (int index) {
            setState(() {
              _selectedIndex = index;
            });
          },
        ),
      ),
    );
  }
}
