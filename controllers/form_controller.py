from requests import post
from odoo import http
from odoo.http import request

class CustomForm(http.Controller):
    @http.route(['/employee/form'], type='http', auth="public", website=True, csrf=False)
    def custom_form(self, **post):
        print("WERTYU------------------")
        return http.request.render("website_task.custom_form_template", {})
    
    @http.route(['/employee/data/submit'], type='json', auth="public")
    def customer_form_submit(self,**post):
        try:
            if request.env.user.id == 4:
                return {'message': 'Login Required', 's_tatus':False, 'body':'Please Login or Signup '}

            request.env['employee.data'].create({
                'ecode': post.get('ecode'),
                'ename': post.get('ename'),
            })
            return {'message': 'Data submitted successfully..', 's_tatus':True, 'body':'Your data has been submitted successfully!'}

        except:

            return {'message': 'Data Cannot be submitted', 's_tatus':True, 'body':'Technical Error.'}