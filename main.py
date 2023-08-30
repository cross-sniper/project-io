#!/usr/bin/env python
import os

def read_file(file_path):
    with open(file_path) as f:
        return f.read()

def read_files_in_directory(directory, extension):
    file_contents = []
    for file in os.listdir(directory):
        if file.endswith(extension):
            file_path = os.path.join(directory, file)
            file_contents.append(read_file(file_path))
    return '\n'.join(file_contents)

def generate_html_file(js_code, css_code, output_filename, game_title):
    template = read_file('template.html')

    js_code_template = """
document.body.onload = function() {
[[code]]
}"""
    js_code_template = js_code_template.replace('[[code]]', js_code)
    js_code_template += f'\ndocument.title = "{game_title}"'

    template = template.replace('[[js-code]]', js_code_template)
    template = template.replace('[[css-code]]', css_code)

    output_filename = output_filename if output_filename.endswith('.html') else output_filename + '.html'

    with open(output_filename, "w") as html_file:
        html_file.write(template)

    print("HTML game file generated.")

def main():
    js_directory = 'js'
    css_directory = 'css'
    js_files_content = read_files_in_directory(js_directory, '.js')
    css_content = read_files_in_directory(css_directory, '.css')

    game_title = input('Enter the name of this game: ')
    output_filename = input('Enter the output file name (e.g., index): ')

    generate_html_file(js_files_content, css_content, output_filename, game_title)

if __name__ == "__main__":
    main()
