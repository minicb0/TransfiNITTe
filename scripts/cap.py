# from amazoncaptcha import AmazonCaptcha

link = 'https://images-na.ssl-images-amazon.com/captcha/usvmgloq/Captcha_kwrrnqwkph.jpg'

captcha = AmazonCaptcha.fromlink(link)
solution = captcha.solve()
print(solution)

print("hi")

# import cv2.cv as cv
# import tesseract
# gray = cv.LoadImage('captcha.jpeg', cv.CV_LOAD_IMAGE_GRAYSCALE)
# cv.Threshold(gray, gray, 231, 255, cv.CV_THRESH_BINARY)
# api = tesseract.TessBaseAPI()
# api.Init(".","eng",tesseract.OEM_DEFAULT)
# api.SetVariable("tessedit_char_whitelist", "0123456789abcdefghijklmnopqrstuvwxyz")
# api.SetPageSegMode(tesseract.PSM_SINGLE_WORD)
# tesseract.SetCvImage(gray,api)
# print api.GetUTF8Text()