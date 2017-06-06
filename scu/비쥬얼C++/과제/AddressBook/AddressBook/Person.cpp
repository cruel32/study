#include "stdafx.h"
#include "Person.h"

IMPLEMENT_SERIAL(Person, CObject, 1);

Person::Person()
{
}

Person::~Person()
{
}

// 직렬화 함수
void Person::Serialize(CArchive &ar)
{
	CObject::Serialize(ar);
	if (ar.IsStoring())
	{
		// 저장
		ar << name << phone << address << gender << age;
	}
	else
	{
		// 복구
		ar >> name >> phone >> address >> gender >> age;
	}
}