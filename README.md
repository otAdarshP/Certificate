# VaLiDiFy - Certificate validation using Blockchain & AI

A blockchain-powered certificate issuance and validation platform leveraging Python, FastAPI, and a simple web frontend to prevent certificate forgery.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

VaLiDiFy is designed to combat credential fraud by maintaining an immutable blockchain ledger of issued certificates. Each certificate is represented as a block containing user details (tokens) and cryptographic hashes. The platform provides:

- **Block Mining & Storage**: Simplified proof-of-work mining and storage of blocks in an Excel-based ledger.
- **Certificate Issuance**: Generate a verification hash for each certificate.
- **Certificate Validation**: Verify authenticity by comparing provided hashes against the blockchain.

## Features

- 💎 **Custom Blockchain Implementation**: Blocks with SHA-256 hashing and Merkle-like verification.
- 🚀 **FastAPI Backend**: Endpoints for adding and validating blocks.
- 🌐 **Web Frontend**: HTML, Bootstrap, and vanilla JavaScript for user interactions.
- 📊 **Excel Persistence**: Blockchain data persisted to `blockchain_data.xlsx` via Pandas.
- 🔒 **CORS-enabled**: Frontend can interact with the backend across origins.

## Tech Stack

- **Backend**: Python 3.x, FastAPI, Pandas
- **Server**: Uvicorn ASGI server
- **Frontend**: HTML, Bootstrap 4, JavaScript

## Directory Structure

```bash
Certificate/
├── Certificate/           # Application code & static files
│   ├── main.py            # FastAPI application and blockchain logic
│   ├── requirements.txt   # Python dependencies
│   ├── index.html         # Web interface for adding/validating certificates
│   ├── script.js          # Frontend logic (fetch calls & UI updates)
│   └── style.css          # Custom styles (optional)
└── README.md              # Project documentation
```

## Prerequisites

- Python 3.8 or higher
- pip package manager

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/otAdarshP/Certificate.git
   cd Certificate/Certificate
   ```
2. **Create a virtual environment & install dependencies**
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

## Running the Application

1. **Start the FastAPI server**
   ```bash
   uvicorn main:app --reload
   ```
   By default, it will run on `http://127.0.0.1:8000`.

2. **Serve the frontend** (in a separate terminal)
   ```bash
   # From the Certificate/Certificate directory:
   python -m http.server 5500
   ```
   Then open your browser at `http://localhost:5500/index.html`.

## Usage

- **Add Block (Issue Certificate)**
  1. Fill in user details (Name, Position, Guests, Institution).
  2. Provide an additional token (metadata).
  3. Click **Add Block** to mine a new block and receive a **verification hash**.

- **Validate Block (Verify Certificate)**
  1. Switch to the **Validate Block** tab.
  2. Enter the previously generated **verification hash**.
  3. Click **Validate Block** to confirm authenticity and view block details.

## API Endpoints

- `POST /add_block`  
  Request Body: `{ "tokens": { ... }, "additional_token": "..." }`  
  Response: `{ "status": "success", "verification_hash": "..." }`

- `POST /validate_certificate`  
  Request Body: `{ "certificate_id": "<verification_hash>" }`  
  Response: `{ "status": "valid", "block_details": { ... } }`

## Contributing

Contributions are welcome!  

1. Fork this repository.  
2. Create a branch: `git checkout -b feature/my-feature`.  
3. Commit your changes: `git commit -m 'Add new feature'`.  
4. Push to your fork: `git push origin feature/my-feature`.  
5. Open a Pull Request.

## License

_No license specified._ If you wish to license this project, please add a `LICENSE` file in the root directory.

