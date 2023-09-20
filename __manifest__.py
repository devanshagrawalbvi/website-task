{
    'name': 'Website_task',
    'version': '1.0',
    'category': 'Apps',
    'author': 'Devansh Agrawal',
    'depends': ['base', 'website'],
    'assets': {
        'web.assets_frontend': [
            # 'website_task/static/src/js/EmployeeDetails.js',
            'website_task/static/src/js/EmployeeForm.js',
            'website_task/static/src/scss/style.scss',
            "website_task/static/src/img/snippets/img.png",
        ],
    },
    'data': [
        "security/ir.model.access.csv",
        
        "views/Snippets/AccordionSnippet.xml",
        "views/Snippets/HeaderSnippet.xml",
        "views/Snippets/TextImageSnippet.xml",
        "views/Snippets/SliderSnippet.xml",
        "views/Snippets/ProfileSnippet.xml",

        "views/DynamicSnippets/Template.xml",
        # "views/DynamicSnippets/QwebTemplate.xml",
        "views/DynamicSnippets/Snippet.xml",
        "data/website_data.xml",
        "data/menu.xml",    
        "views/CustomFormTemplate.xml",
        "views/EmployeeInfo.xml",
        "views/menu.xml",

    ],

    "application": True,
    'bootstrap': True,
    "auto_install": True,
    "sequence": 1
}
