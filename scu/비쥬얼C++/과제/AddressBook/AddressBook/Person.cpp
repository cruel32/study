#include "stdafx.h"
#include "Person.h"

IMPLEMENT_SERIAL(Person, CObject, 1);

Person::Person()
{
}

Person::~Person()
{
}

// ����ȭ �Լ�
void Person::Serialize(CArchive &ar)
{
	CObject::Serialize(ar);
	if (ar.IsStoring())
	{
		// ����
		ar << name << phone << address << gender << age;
	}
	else
	{
		// ����
		ar >> name >> phone >> address >> gender >> age;
	}
}