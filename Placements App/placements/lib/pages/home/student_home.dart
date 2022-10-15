import 'package:flutter/material.dart';
import 'package:placements/pages/home/student_chat.dart';
import 'package:placements/pages/home/student_profile.dart';
import 'package:placements/pages/home/student_stats.dart';
import 'package:placements/pages/stats.dart';

class StudentHome extends StatefulWidget {
  const StudentHome({super.key});

  @override
  State<StudentHome> createState() => StudentHomeState();
}

class StudentHomeState extends State<StudentHome> {
  int _selectedIndex = 0;
  List<Widget> page = [StudentChat(), const StatsPage(), StudentProfile()];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Student - Home"),
          centerTitle: true,
        ),
        body: page[_selectedIndex],
        bottomNavigationBar: BottomNavigationBar(
          items: const [
            BottomNavigationBarItem(
                icon: Icon(Icons.chat_bubble),
                label: 'Chat',
                backgroundColor: Colors.purple),
            BottomNavigationBarItem(
                icon: Icon(Icons.query_stats),
                label: 'Stats',
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
