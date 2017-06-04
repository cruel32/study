<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/bookStore">
    <HTML>
      <HEAD>
        <TITLE></TITLE>
      </HEAD>
      <BODY>
        <table border="1" cellpadding="0" cellspacing="0">
          <tr>
            <th colspan="3">상품명</th>
            <th>정가</th>
            <th>할인율</th>
            <th>판매가(적립금)</th>
            <th>수량</th>
            <th>합계</th>
            <th>배송일</th>
          </tr>

          


          <xsl:for-each select="books/book">
            <tr>
              <td>
                <img>
                  <xsl:attribute name="width">100</xsl:attribute>
                  <xsl:attribute name="src">
                    <xsl:value-of select="image"/>
                  </xsl:attribute>
                </img>
              </td>
              <td><xsl:value-of select="category"/></td>
              <td><xsl:value-of select="subscribe"/></td>
              <td>
                <xsl:value-of select="format-number(price, '##,##,##,###')" />      
              </td>
              <td>
                <xsl:value-of select="discount" />
                <xsl:value-of select="discount/@unit" />
              </td>
              <td>
                <xsl:variable name="rev"><xsl:value-of select="price * discount div 100"/></xsl:variable>
                <xsl:variable name="rprice"><xsl:value-of select="price - $rev" /></xsl:variable>
                <xsl:value-of select="format-number($rprice, '##,##,##,###')"/>
                (<xsl:value-of select="format-number($rev, '##,##,##,###')" />)
              </td>
              <td><xsl:value-of select="amount"/></td>
              <td><xsl:value-of select="format-number( (price - (price * discount ) div 100) * amount, '##,##,##,###') "/></td>
              <td><xsl:value-of select="shippingDate"/></td>
            </tr>
          </xsl:for-each>

          <tr>
            <td colspan="9" align="right">
            
              <xsl:variable name="totals">
                <xsl:for-each select="books/book">
                  <reverse><xsl:value-of select="price * discount div 100"/></reverse>
                  <realprice><xsl:value-of select="price - (price * discount) div 100"/></realprice>
                </xsl:for-each>
              </xsl:variable>

              <span><xsl:value-of select="sum($totals/reverse)"/></span>

              <span>총 상품 수 : <xsl:value-of select="sum(books/book/amount)"/>개,</span>
              <span>총 상품금액 : <xsl:value-of select="format-number(sum( books/book/rPprice ), '##,##,##,###')"/>원,</span>
              <span>총 예상적립 포인트 : <xsl:value-of select="format-number(sum( (books/book/reverse )), '##,##,##,###')"/>원</span>
            </td>
          </tr>
        </table>
      </BODY>
    </HTML>
  </xsl:template>
</xsl:stylesheet>