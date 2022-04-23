import os
import numpy as np
import pandas as pd
from typing import List


path_to_data: str = os.path.join(os.getcwd(), 'data', 'ВВП стран мира.csv')
path_to_js_file: str = os.path.join(os.getcwd(), 'static', 'scripts', 'variablesData.js')

df: pd.DataFrame = pd.read_csv(path_to_data, skiprows=3)

df['2019'] = df['2019'].apply(lambda x: x.replace(',', '.') if '-' not in x else np.NaN)
df['2020'] = df['2020'].apply(lambda x: x.replace(',', '.') if '-' not in x else np.NaN)
df.dropna(inplace=True)
df['2019'] = df['2019'].astype('float64')
df['2020'] = df['2020'].astype('float64')

labels: List[str] = ['2019', '2020']
data_by_one: List[float] = df[labels[0]].to_list()
data_by_two: List[float] = df[labels[1]].to_list()
label_names: List[str] = df['Страна'].to_list()

label: str = f"let labels = {labels};"
labels_names: str = f"let labelsNames = {label_names};"
data: str = f"let data = [{data_by_one}, \n{data_by_two}];"
result = '// gen by python\n{}\n{}\n{}\n// py data gen'

with open(path_to_js_file, 'w', encoding='utf') as f_out:
    f_out.write(result.format(label, labels_names, data))
