import re
import urllib.request
def catch_pic(url, page):
    html = urllib.request.urlopen(url).read()
    html = html.decode('utf-8')
    pattern = '<img width="220" height="220" data-img="1" data-lazy-img="//(.+?\.jpg)">'
 
    imagelist = re.compile(pattern).findall(html)
    x = 1
    for imageurl in imagelist:
        imagename = "D:/reptile/jd_food_pic/" + str(page) + "_" + str(x) + ".jpg"
        imageurl = "http://" + imageurl
        try:
            urllib.request.urlretrieve(imageurl, filename=imagename)
        except urllib.error.URLError as e:
            if hasattr(e, "code"):
                x += 1
            if hasattr(e, "reason"):
                x += 1
        x += 1
 
 
for i in range(1, 10):
    url = "https://list.jd.com/list.html?cat=0,0,2678&page=" + str(i)
    
    catch_pic(url, i)
