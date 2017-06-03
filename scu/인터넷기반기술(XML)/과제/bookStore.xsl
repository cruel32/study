<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/bookStore">
    <HTML>
      <HEAD>
        <TITLE></TITLE>
      </HEAD>
      <BODY>
        <table border="1">
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
              <td><xsl:value-of select="price"/></td>
              <td><xsl:value-of select="discount"/></td>
              <td><xsl:value-of select="priceReverse"/></td>
              <td><xsl:value-of select="amount"/></td>
              <td><xsl:value-of select="shippingDate"/></td>
              <td><xsl:value-of select="shippingDate"/></td>
            </tr>
          </xsl:for-each>
          <tr>
            <td colspan="9">

            </td>
          </tr>
        </table>
      </BODY>
    </HTML>
  </xsl:template>
</xsl:stylesheet>