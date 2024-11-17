import pandas as pd
import re
import json

url = "https://docs.google.com/spreadsheets/d/1XqHy4Nh-fXNYSZof5szKbrGxyvbHqGAnORG7gtwlQ-E/edit?gid=0#gid=0"

def convert_google_sheet_url(url):
    # Regular expression to match and capture the necessary part of the URL
    pattern = r'https://docs\.google\.com/spreadsheets/d/([a-zA-Z0-9-_]+)(/edit#gid=(\d+)|/edit.*)?'

    # Replace function to construct the new URL for CSV export
    # If gid is present in the URL, it includes it in the export URL, otherwise, it's omitted
    replacement = lambda m: f'https://docs.google.com/spreadsheets/d/{m.group(1)}/export?' + (f'gid={m.group(3)}&' if m.group(3) else '') + 'format=csv'

    # Replace using regex
    new_url = re.sub(pattern, replacement, url)

    return new_url

# Imports CSV from google sheets and stores it as dataframe
csv_export_url = convert_google_sheet_url(url)
df = pd.read_csv(csv_export_url)

# Stores data in json file
json_data = df.to_json('data.json', orient='records')
