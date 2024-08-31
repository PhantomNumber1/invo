import os
import time
import subprocess
import requests
import git

# Function to start ngrok tunnel
def start_ngrok():
    # Start ngrok in a new command prompt window
    subprocess.Popen(['cmd', '/c', 'start', 'cmd', '/k', 'ngrok', 'http', '5000'])

# Function to get the ngrok URL from the local status file
def get_ngrok_url():
    response = requests.get('http://localhost:4040/api/tunnels')
    data = response.json()
    tunnel_url = data['tunnels'][0]['public_url']
    return tunnel_url

# Start ngrok tunnel
start_ngrok()
time.sleep(5)  # Wait for ngrok to start and be available

# Update a file with the ngrok URL
file_path = "src/lib/assets/config.js"  # Path to the ngrok.txt file within your repo

ngrok_url = get_ngrok_url()
with open(file_path, "w") as file:
    file.write(f"export const apiBaseUrl = '{ngrok_url}';\n")

# Add, commit, and push the changes to Git
repo_dir = "E:/Hackathon/Volvo Hackathon/Deployable"  # Change this to your local repository path
repo = git.Repo(repo_dir)
repo.git.add(file_path)
repo.index.commit(f"Update ngrok URL to {ngrok_url}")
origin = repo.remote(name='origin')
origin.push()

print(f"Ngrok URL ({ngrok_url}) saved to {file_path} and changes pushed to Git.")

