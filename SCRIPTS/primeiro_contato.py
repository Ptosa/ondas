import urllib.parse
import time
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By

df = pd.read_excel(r'C:\Users\Pedro Lustosa\projeto_igreja\contato.xlsx')

df = df[df['Nome'] != '']

mensagem=""

navegador = webdriver.Chrome()  

for linha in df.index:
    if pd.notnull(df.loc[linha,"Nome"]):
        nome_completo = df.loc[linha, "Nome"]
        nome = nome_completo.split()[0] if pd.notnull(nome_completo) else "Aluno"
        numero = df.loc[linha, "Contato"]
        if pd.isna(numero):
            continue
        numero = int(numero)
        mensagem = f"Olá {nome}, passando aqui pra perguntar como foi a visita"
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
