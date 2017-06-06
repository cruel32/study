
// AddressBookDlg.cpp : 구현 파일
//

#include "stdafx.h"
#include "AddressBook.h"
#include "AddressBookDlg.h"
#include "afxdialogex.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

// 응용 프로그램 정보에 사용되는 CAboutDlg 대화 상자입니다.

class CAboutDlg : public CDialogEx
{
public:
	CAboutDlg();

// 대화 상자 데이터입니다.
	enum { IDD = IDD_ABOUTBOX };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV 지원입니다.

// 구현입니다.
protected:
	DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialogEx(CAboutDlg::IDD)
{
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialogEx)
END_MESSAGE_MAP()


// CAddressBookDlg 대화 상자



CAddressBookDlg::CAddressBookDlg(CWnd* pParent /*=NULL*/)
	: CDialogEx(CAddressBookDlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CAddressBookDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
	DDX_Control(pDX, IDS_TOTAL, mStaticTotal);
	DDX_Control(pDX, IDS_NAME, mStaticName);
	DDX_Control(pDX, IDS_AGE, mStaticAge);
	DDX_Control(pDX, IDS_GENDER, mStaticGender);
	DDX_Control(pDX, IDS_PHONE, mStaticPhone);
	DDX_Control(pDX, IDS_ADDRESS, mStaticAddress);
}

BEGIN_MESSAGE_MAP(CAddressBookDlg, CDialogEx)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	ON_BN_CLICKED(IDOK, &CAddressBookDlg::OnBnClickedOk)
	ON_BN_CLICKED(IDB_INSERT, &CAddressBookDlg::OnBnClickedInsert)
	ON_BN_CLICKED(IDB_SAVE, &CAddressBookDlg::OnBnClickedSave)
	ON_BN_CLICKED(IDB_LOAD, &CAddressBookDlg::OnBnClickedLoad)
	ON_LBN_DBLCLK(IDL_LIST, &CAddressBookDlg::OnLbnDblclkList)
	ON_BN_CLICKED(IDR_MALE, &CAddressBookDlg::OnBnClickedMale)
	ON_BN_CLICKED(IDR_FEMALE, &CAddressBookDlg::OnBnClickedFemale)
	ON_BN_CLICKED(IDB_SEARCH, &CAddressBookDlg::OnBnClickedSearch)
END_MESSAGE_MAP()


// CAddressBookDlg 메시지 처리기

BOOL CAddressBookDlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// 시스템 메뉴에 "정보..." 메뉴 항목을 추가합니다.

	// IDM_ABOUTBOX는 시스템 명령 범위에 있어야 합니다.
	ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
	ASSERT(IDM_ABOUTBOX < 0xF000);

	CMenu* pSysMenu = GetSystemMenu(FALSE);
	if (pSysMenu != NULL)
	{
		BOOL bNameValid;
		CString strAboutMenu;
		bNameValid = strAboutMenu.LoadString(IDS_ABOUTBOX);
		ASSERT(bNameValid);
		if (!strAboutMenu.IsEmpty())
		{
			pSysMenu->AppendMenu(MF_SEPARATOR);
			pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
		}
	}

	// 이 대화 상자의 아이콘을 설정합니다.  응용 프로그램의 주 창이 대화 상자가 아닐 경우에는
	//  프레임워크가 이 작업을 자동으로 수행합니다.
	SetIcon(m_hIcon, TRUE);			// 큰 아이콘을 설정합니다.
	SetIcon(m_hIcon, FALSE);		// 작은 아이콘을 설정합니다.

	// TODO: 여기에 추가 초기화 작업을 추가합니다.

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

void CAddressBookDlg::OnSysCommand(UINT nID, LPARAM lParam)
{
	if ((nID & 0xFFF0) == IDM_ABOUTBOX)
	{
		CAboutDlg dlgAbout;
		dlgAbout.DoModal();
	}
	else
	{
		CDialogEx::OnSysCommand(nID, lParam);
	}
}

// 대화 상자에 최소화 단추를 추가할 경우 아이콘을 그리려면
//  아래 코드가 필요합니다.  문서/뷰 모델을 사용하는 MFC 응용 프로그램의 경우에는
//  프레임워크에서 이 작업을 자동으로 수행합니다.

void CAddressBookDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// 클라이언트 사각형에서 아이콘을 가운데에 맞춥니다.
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// 아이콘을 그립니다.
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialogEx::OnPaint();
	}
}

// 사용자가 최소화된 창을 끄는 동안에 커서가 표시되도록 시스템에서
//  이 함수를 호출합니다.
HCURSOR CAddressBookDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}



void CAddressBookDlg::OnBnClickedOk()
{
	// TODO: Add your control notification handler code here
	CWnd *p = GetFocus();
	if (GetDlgItem(IDOK) == p)
	{
		CDialogEx::OnOK();
		return;
	}
}

// 주소록 생성
void CAddressBookDlg::OnBnClickedInsert()
{
	// TODO: Add your control notification handler code here
	CString name, age, phone, address;

	// 에디트박스 내용을 가져옴
	GetDlgItemText(IDE_NAME, name);
	GetDlgItemText(IDE_AGE, age);
	GetDlgItemText(IDE_PHONE, phone);
	GetDlgItemText(IDE_ADDRESS, address);

	// 예외처리
	if (name.IsEmpty())		{ MessageBox(_T("이름을 입력하세요")); return; }
	if (age.IsEmpty())		{ MessageBox(_T("나이를 입력하세요")); return; }
	if (phone.IsEmpty())	{ MessageBox(_T("전화를 입력하세요")); return; }
	if (address.IsEmpty())	{ MessageBox(_T("주소를 입력하세요")); return; }
	
	// 클래스 생성
	Person p;
	p.set_name(name);
	p.set_age(age);
	p.set_phone(phone);
	p.set_address(address);
	p.set_gender(mGender);

	// 리스트에 저장
	mPeople.push_back(p);
	mPeople.sort();			// 이름 순 정렬
	mGender = L"UNKNOWN";

	// 목록 갱신
	updateAddressList();
}

// 화면 갱신 함수
void CAddressBookDlg::updateAddressList()
{
	CListBox *p = (CListBox *)GetDlgItem(IDL_LIST);
	p->ResetContent();		// 출력 전 리스트박스 초기화

	// 목록 출력
	for (list<Person>::iterator iter = mPeople.begin(); iter != mPeople.end(); ++iter)
	{
		p->AddString(iter->get_name());
	}

	// 주소록 수량 표시
	CString t;
	t.Format(_T("%d 명"), mPeople.size());
	mStaticTotal.SetWindowTextW(t);

	Invalidate(false);
}

// 주소록 정보를 파일로 저장
void CAddressBookDlg::OnBnClickedSave()
{
	// TODO: Add your control notification handler code here
	CFile file;
	CString path = _T("File.dat");

	// 예외 처리
	if (!file.Open(path, CFile::modeCreate | CFile::modeWrite))
	{
		return;
	}
	if (mPeople.empty())
	{
		return;
	}

	// 주소록 리스트를 파일로 저장
	CArchive ar(&file, CArchive::store);
	ar << (DWORD)mPeople.size();
	for (list<Person>::iterator iter = mPeople.begin(); iter != mPeople.end(); ++iter)
	{	
		try {
			iter->Serialize(ar);
		}
		catch (CFileException *fe)		{ fe->ReportError(); }
		catch (CArchiveException *ae)	{ ae->ReportError(); }
		catch (CMemoryException *me)	{ me->ReportError(); }
	}
	ar.Close();
	file.Close();
	MessageBox(_T("저장 완료"));
}

// 저장된 주소록 로드
void CAddressBookDlg::OnBnClickedLoad()
{
	// TODO: Add your control notification handler code here
	CFile file;
	CString path = _T("File.dat");

	// 예외 처리
	if (!file.Open(path, CFile::modeRead))
	{
		return;
	}
	if (!mPeople.empty())
	{
		if (IDYES == AfxMessageBox(L"저장된 목록을 불러오면 현재 주소록이 삭제됩니다.", MB_YESNO))
		{
			mPeople.clear();
		}
		else
		{
			return;
		}
	}

	// 파일 로드
	CArchive ar(&file, CArchive::load);
	DWORD count;
	ar >> count;						// 전체 주소록 수
	for (int i = 0; i < count; i++)		// 반복적으로 로드
	{
		Person p;
		p.Serialize(ar);
		mPeople.push_back(p);
	}
	ar.Close();
	file.Close();	
	updateAddressList();				// 갱신
}

// 목록 클릭 시 상세정보 표시
void CAddressBookDlg::OnLbnDblclkList()
{
	// TODO: Add your control notification handler code here
	CListBox *p = (CListBox *)GetDlgItem(IDL_LIST);

	int idx = p->GetCurSel();

	auto iter = mPeople.begin();
	advance(iter, idx);

	mStaticName.SetWindowTextW(iter->get_name());
	mStaticAge.SetWindowTextW(iter->get_age());
	mStaticPhone.SetWindowTextW(iter->get_phone());
	mStaticGender.SetWindowTextW(iter->get_gender());
	mStaticAddress.SetWindowTextW(iter->get_address());

	Invalidate(false);
}

// 성별 선택 처리
void CAddressBookDlg::OnBnClickedMale()
{
	// TODO: Add your control notification handler code here
	mGender = L"남자";
}

// 성별 선택 처리
void CAddressBookDlg::OnBnClickedFemale()
{
	// TODO: Add your control notification handler code here
	mGender = L"여자";
}

// 이름 검색
void CAddressBookDlg::OnBnClickedSearch()
{
	// TODO: Add your control notification handler code here
	CString q;
	GetDlgItemText(IDE_SEARCH, q);

	// 예외처리
	if (q.IsEmpty())
	{
		return;
	}

	// 리스트에서 해당 이름을 검색하여 표시
	for (list<Person>::iterator iter = mPeople.begin(); iter != mPeople.end(); ++iter)
	{
		if (iter->get_name() == q)
		{
			mStaticName.SetWindowTextW(iter->get_name());
			mStaticAge.SetWindowTextW(iter->get_age());
			mStaticPhone.SetWindowTextW(iter->get_phone());
			mStaticGender.SetWindowTextW(iter->get_gender());
			mStaticAddress.SetWindowTextW(iter->get_address());

			Invalidate(false);
			return;
		}
	}
	MessageBox(_T("주소록에 존재하지 않습니다."));
}
