import django_tables2 as tables

class PersonTable(tables.Table):
    class Meta:
        model = Person
