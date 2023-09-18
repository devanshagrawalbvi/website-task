from odoo import models, fields, api

class Employee(models.Model):
    _name = "employee.data"
    _description = "Employee"

    ename = fields.Char(string="Employee Name")
    ecode = fields.Integer(string="Employee Employee Code")
    eprofile = fields.Binary(string="Employee Profile Image")
    emonthlysalary = fields.Integer(string="Employee Monthly Salary") 
    # esalary = fields.Integer(string="Employee Monthly Salary",compute="_cal_salary") 

    # @api.depends('emonthlysalary')
    # def _cal_salary(self):
    #     self.esalary = self.emonthlysalary * 12