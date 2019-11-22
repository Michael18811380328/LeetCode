select Person.FirstName, Person.lastName, Address.City, Address.State from Person Person left join Address Address on Person.PersonId = Address.PersonId;

select (select distinct Salary from Employee order by Salary Desc limit 1 offset 1) as SecondHightSalary;

select Name as Customers from Customers where Id not in (select CustomerId from Orders where Id is not null);
