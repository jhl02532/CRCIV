import re
import urllib.parse

filepath = r'c:\Users\jhl02\OneDrive\Desktop\crciv_homepage\publications.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def repl(match):
    title = match.group(1)
    if title == '50+' or title == '4,000+' or title == '15+':
        return match.group(0) # Do not replace stats
    
    clean_title = title.strip()
    if clean_title.endswith('.'):
        clean_title = clean_title[:-1]
    url = 'https://scholar.google.com/scholar?q=' + urllib.parse.quote(clean_title)
    return f'<h3><a href="{url}" target="_blank" rel="noopener noreferrer">{title} <i class="fas fa-external-link-alt"></i></a></h3>'

new_content = re.sub(r'<h3>(.*?)</h3>', repl, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated publications.html successfully.")
