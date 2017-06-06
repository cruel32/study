
// AddressBookDlg.h : 헤더 파일
//

#pragma once

#include <functional>
#include <algorithm>
#include <list>
#include "Person.h"
#include "afxwin.h"

using namespace std;

// CAddressBookDlg 대화 상자
class CAddressBookDlg : public CDialogEx
{
// 생성입니다.
public:
	CAddressBookDlg(CWnd* pParent = NULL);	// 표준 생성자입니다.

// 대화 상자 데이터입니다.
	enum { IDD = IDD_ADDRESSBOOK_DIALOG };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV 지원입니다.

	void updateAddressList();

// 구현입니다.
protected:
	HICON m_hIcon;

	// 생성된 메시지 맵 함수
	virtual BOOL OnInitDialog();
	afx_msg void OnSysCommand(UINT nID, LPARAM lParam);
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnBnClickedOk();
	afx_msg void OnBnClickedInsert();
	afx_msg void OnBnClickedSave();
	afx_msg void OnBnClickedLoad();
	afx_msg void OnLbnDblclkList();
	afx_msg void OnBnClickedMale();
	afx_msg void OnBnClickedFemale();
	
	list<Person> mPeople;
	CString mGender = L"UNKNOWN";
	CStatic mStaticTotal;
	CStatic mStaticName;
	CStatic mStaticAge;
	CStatic mStaticGender;
	CStatic mStaticPhone;
	CStatic mStaticAddress;
	afx_msg void OnBnClickedSearch();
};
