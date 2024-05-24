import urllib.parse
import time
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
import tkinter as tk
from tkinter import messagebox

df = pd.read_excel(r'C:\Users\Pedro Lustosa\projeto_igreja\CHAMADA+CADASTRO(3).xlsx')

df = df[df['Nome'] != '']

colunas_desejadas = [1, 2, 3, 4, 'Nome', 'Contato']
df = df[colunas_desejadas]

print(df.columns)

mensagem=""

aula_faltada = None

def submit_data():
    global aula_faltada
    user_input = entry.get()
    try:
        aula_faltada = int(user_input)
        root.destroy()
    except ValueError:
        messagebox.showerror("Erro", "Por favor, insira um número válido")

root = tk.Tk()
root.title("Meu Programa")

label = tk.Label(root, text="Que aula será ministrada essa semana?")
label.pack(pady=10)

entry = tk.Entry(root)
entry.pack(pady=10)

button = tk.Button(root, text="Enviar", command=submit_data)
button.pack(pady=10)


root.mainloop()


navegador = webdriver.Chrome()  


if aula_faltada is None:
    print("Nenhuma aula foi especificada.")
    exit()


aula_col_name = aula_faltada
if aula_col_name not in df.columns:
    print(f"A coluna '{aula_col_name}' não existe no DataFrame.")
    exit()


for linha in df.index:
    if pd.notnull(df.loc[linha,"Nome"]):
        nome_completo = df.loc[linha, "Nome"]
        nome = nome_completo.split()[0] if pd.notnull(nome_completo) else "Aluno"

        numero = df.loc[linha, "Contato"]
        if pd.isna(numero):
            continue

        numero = int(numero)

        
        if aula_faltada != 4:
            if pd.isna(df.loc[linha, aula_col_name]):
                mensagem = f"Olá {nome}, lembrando que tem a aula {aula_faltada} essa semana!"
        else:
            if pd.isna(df.loc[linha, aula_col_name]) and pd.notnull(df.loc[linha,3]):
                mensagem = f"Olá {nome}, lembrando que tem a aula {aula_faltada} essa semana!"
            elif pd.isna(df.loc[linha,3]):
                mensagem = f"Olá {nome}, vi que você faltou a aula 3. Para assistir a aula 4, é necessário estar presente na aula 3. Então não precisa vir esse fim de semana. Obrigado!"
        if mensagem is not None:
            texto = urllib.parse.quote(mensagem)
            link = f"https://web.whatsapp.com/send?phone={numero}&text={texto}"

            navegador.get(link)
            while len(navegador.find_elements(By.XPATH, '//*[@id="main"]/div[3]/div/div[2]/div[3]')) < 1:
                time.sleep(1)
            navegador.find_element(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]/button/span').click()
            time.sleep(3)
            print(f"Mensagem enviada para {nome}")

navegador.quit()
