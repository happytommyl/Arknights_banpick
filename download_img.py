import requests
import os

with open("links.txt", mode="r") as f:
    links = f.readlines()

# def request_download(url):
#     r = requests.get(url)
#     with open('./image/img2.png', 'wb') as f:
#         f.write(r.content) 
for link in links:
    link = link.replace(r'\n','')

for i in range(len(links)):
    url = links[i].replace("\n", '')
    print(url)
    r = requests.get(url)
    with open('./img/' + str(i) + '.png', 'wb') as f:
        print(url)
        f.write(r.content)
    