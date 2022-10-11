import THEME from '@/styles/css/ts/theme'

const textColor = THEME.colors.primary

export default `
<table width="100%">
<tr>
  <td align="center">
    <h2 style="color: ${textColor}; font-weight: bold">
      Contato
    </h2>
  </td>
</tr>
</table>

<div><b style="color: ${textColor}">Nome:</b> #{name}</div>

<div><b style="color: ${textColor}">Email:</b> #{email}</div>
<div><b style="color: ${textColor}">Telefone:</b> #{telephone}</div>

<hr />

<pre>#{message}</pre>
`
