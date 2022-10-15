from curses.ascii import isdigit
from enum import unique
import fitz
import json


def make_text(words):
    """Return textstring output of get_text("words").
    Word items are sorted for reading sequence left to right,
    top to bottom.
    """
    line_dict = {}  # key: vertical coordinate, value: list of words
    words.sort(key=lambda w: w[0])  # sort by horizontal coordinate
    for w in words:  # fill the line dictionary
        y1 = round(w[3], 1)  # bottom of a word: don't be too picky!
        word = w[4]  # the text of the word
        line = line_dict.get(y1, [])  # read current line content
        line.append(word)  # append new word
        line_dict[y1] = line  # write back to dict
    lines = list(line_dict.items())
    lines.sort()  # sort vertically
    return "\n".join([" ".join(line[1]) for line in lines])

data = []

doc = fitz.open("ac012291_ocr_final.pdf")  # any supported document type
  # we want text from this page

# """
# -------------------------------------------------------------------------------
# Identify the rectangle.
# -------------------------------------------------------------------------------
# """
# #x0,y0,x1,y1
# rect = fitz.Rect(27,53,208,125)
# # Now we have the rectangle ---------------------------------------------------

# """
# Get all words on page in a list of lists. Each word is represented by:
# [x0, y0, x1, y1, word, bno, lno, wno]
# The first 4 entries are the word's rectangle coordinates, the last 3 are just
# technical info (block number, line number, word number).
# The term 'word' here stands for any string without space.
# """

# words = page.get_text("words")  # list of words on page

# """
# We will subselect from this list, demonstrating two alternatives:
# (1) only words inside above rectangle
# (2) only words insertecting the rectangle
# The resulting sublist is then converted to a string by calling above funtion.

def finder (key, text):
    i = len(key) + text.index(key)
    while(i < len(text)):
        if(('0' <= text[i] <= '9')or('A'<= text[i] <='z')):
          break
        i += 1 
    value = text[i:].split(" ")[0]
    return value

def finder1 (key, text):
    i = len(key) + text.index(key)
    while(i < len(text)):
        if(('0' <= text[i] <= '9')or('A'<= text[i] <='z')):
          break
        i += 1 
    value = text[i:]
    return value


c = 0
house_num = {}
unique = []

for j in range(2,len(doc)-2):
    page = doc[j]
    words = page.get_text("words")
    for i in range(27,571,181):
        rect = fitz.Rect(i,0,i+181,10000)
        mywords = [w for w in words if fitz.Rect(w[:4]) in rect]

        s = make_text(mywords)
        k = s.split("\n")
        t = {}

        for str in k :
            if "Father's Name" in str :
                t["Father's Name"] = finder1("Father's Name",str) 
            elif "Husband's Name" in str:
                t["Husband's Name"] = finder1("Husband's Name",str)  
            elif "Name" in str :
                t["Name"] = finder1("Name",str)       
            if "House Number" in str :
                t["House Number"] = finder("House Number", str)
                
            if "Age" in str :
                t["Age"] = finder("Age", str)
            if "Gender" in str :
                t["Gender"] = finder("Gender", str)

            if len(t) == 5:
                data.append(t)
                t = {}
                next = 0

for i in data:
    if i["House Number"] not in house_num:
        house_num[i["House Number"]] = 1
    else :
        house_num[i["House Number"]] += 1

for k,v in house_num.items() :
    if v == 11 :
        print("House : ",k)

print(len(house_num))

for i in house_num:
    if house_num[i] not in unique:
        unique.append(house_num[i])

print(unique)

import json        
jsonString = json.dumps(data)
jsonFile = open("./data.json", "w")
jsonFile.write(jsonString)
jsonFile.close()