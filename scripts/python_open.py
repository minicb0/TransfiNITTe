import cv2
import numpy as np
 
# To read image from disk, we use
# cv2.imread function, in below method,
img = cv2.imread("cap.jpg", cv2.IMREAD_COLOR)

(a, b, c) = img[0][0]

for i in range(len(img)):
    for j in range(len(img[i])):
        if (img[i][j] == np.array([a, b, c])).all() :
            img[i][j] = [255, 255, 255]
        else :
            img[i][j] = [0,0,0]

# cv2.imshow("Image", img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

filename = 'savedImage.jpg'
cv2.imwrite(filename, img)