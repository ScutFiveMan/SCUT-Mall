from bs4 import BeautifulSoup
import urllib
import xlsxwriter
from selenium import webdriver


def get_good_urls(word):
    url_str = urllib.parse.quote(word)
    urls = ("https://search.jd.com/Search?keyword={}&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&offset=4&page={}&s=1&click=0".format(url_str, i) for i in range(1,12,2))
    return urls


def get_html(url):
    driver = webdriver.PhantomJS(executable_path=r'D:/phantomjs/phantomjs-2.1.1-windows/bin/phantomjs.exe')
    driver.get(url)
    web_data = driver.page_source
    soup = BeautifulSoup(web_data, 'lxml')
    return soup

def get_info(soup):
    all_titles = soup.find_all(class_="p-name p-name-type-2")
    all_prices = soup.find_all(class_="p-price")
    all_commits = soup.find_all(class_="p-commit")
    all_imgs = soup.find_all(class_="p-img")

    titles = []
    prices = []
    commits = []
    links = []
    imgs = []

    for title in all_titles:
        titles.append(title.text.strip())

    for price in all_prices:
        prices.append(price.text.strip())

    for commit in all_commits:
        commits.append(commit.text.strip())

    for link in all_imgs:
        links.append(link.find_all('a')[0].get("href"))

    for img in all_imgs:
        imgs.append(img.find_all('img')[0].get("src"))

    return titles, prices, commits, links, imgs

if __name__ == '__main__':
    good = input("请输入你要查询的商品\n")
    links = get_good_urls(good)

    workbook = xlsxwriter.Workbook(good + '.xlsx') #创建新表
    worksheet = workbook.add_worksheet()

    bold = workbook.add_format({'bold': True})  #建立粗体格式

    worksheet.write('A1', 'Title', bold)        #写入标题，粗体
    worksheet.write('B1', 'Price', bold)
    worksheet.write('C1', 'Commit', bold)
    worksheet.write('D1', 'Link', bold)
    worksheet.write('F1', 'Img', bold)

    worksheet.set_column('A:A', 100)            #改变列宽度
    worksheet.set_column('B:B', 10)
    worksheet.set_column('C:C', 18)
    worksheet.set_column('D:D', 27)
    worksheet.set_column('F:F', 100)

    all_row = 1
    col = 0

    for link in links:
        html = get_html(link)
        ti, pr, co, li, im = get_info(html)

        row = all_row
        for t in ti:
            worksheet.write(row, col, t)
            row += 1

        row = all_row
        for p in pr:
            worksheet.write(row, col+1, p)
            row += 1

        row = all_row
        for c in co:
            worksheet.write(row, col+2, c)
            row += 1

        row = all_row     
        for l in li:
            worksheet.write(row, col+3, l)
            row += 1

        row = all_row     
        for i in im:
            worksheet.write(row, col+4, i)
            row += 1

        all_row += len(ti)
        print('Done One page')
    workbook.close()

