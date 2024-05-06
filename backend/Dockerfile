FROM python:3.9
WORKDIR /app

# Dependências
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# executar a app utilizando Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
