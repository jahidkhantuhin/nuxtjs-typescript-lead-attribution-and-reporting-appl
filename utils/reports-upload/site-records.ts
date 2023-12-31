import {
  generateDataFromColumnsAndData,
  generateHeadersFromColumns,
} from './helpers'
import moment from 'moment'


export const siteRecordsColumns = () => {
  return [
    {
        upload: {
          value: (value: any) => value || '',
          styles: {
            width: '20px',
          },
        },
        text: `Site URL`,
        align: `start`,
        sortable: true,
        value: `siteURL`,
        width: '340px',
        minWidth: '340px',
      },
    {
      upload: {
        value: (value: any) => value || '',
        styles: {
          width: '20px',
        },
      },
      text: `Client Name`,
      align: `start`,
      sortable: true,
      value: `clientName`,
      width: '240px',
      minWidth: '340px',
    },
    {
      upload: {
        value: (value: any) => value || '',
        styles: {
          width: '20px',
        },
      },
      text: `Status`,
      align: `start`,
      sortable: true,
      value: `status`,
      width: '140px',
      minWidth: '340px',
    },
    {
    upload: {
      value: (value: any) => value || '',
      styles: {
        width: '20px',
      },
    },
    text: `Plugins`,
    align: `start`,
    sortable: true,
    value: `plugins`,
    width: '140px',
    minWidth: '340px',
    },
    {
    upload: {
        value: (value: any) => value || '',
        styles: {
            width: '20px',
        },
        },
        text: `Account manager`,
        align: `start`,
        sortable: true,    
        value: `accountManager`,   
        width: '240px',
    },
    {
      upload: {
        value: (value: any) => value || '',
        styles: {
            width: '20px',
        },
        },
        text: `Avg Desktop Score`,
        align: `start`,
        sortable: true,    
        value: `avg_desktop_score`,   
        width: '150px',
    },
    {
      upload: {
        value: (value: any) => value || '',
        styles: {
            width: '20px',
        },
        },
        text: `Avg Desktop Speed Index`,
        align: `start`,
        sortable: true,    
        value: `avg_desktop_speed_index`,   
        width: '150px',
    },
    {
      upload: {
        value: (value: any) => value || '',
        styles: {
            width: '20px',
        },
        },
        text: `Avg Mobile Score`,
        align: `start`,
        sortable: true,    
        value: `avg_mobile_score`,   
        width: '150px',
    },
    {
      upload: {
        value: (value: any) => value || '',
        styles: {
            width: '20px',
        },
        },
        text: `Avg Mobile Speed Index`,
        align: `start`,
        sortable: true,    
        value: `avg_mobile_speed_index`,   
        width: '150px',
    },
    {
      upload: {
        value: (value: any) => value || '',
        styles: {
            width: '20px',
        },
        },
        text: `Avg Server Resp Time`,
        align: `start`,
        sortable: true,    
        value: `avg_server_response_time`,   
        width: '150px',
    },
    
  ]
}

const generateSiteRecordsReport = (computedReport: any, params: any) => {
  const { user, filters } = params
  return {
    type: 'SIte-records',
    name: `Site-records, ${moment(filters.value.date[0]).format(
      'YYYY-DD-MM'
    )}-to-${moment(filters.value.date[1]).format(
      'YYYY-DD-MM'
    )}, Generated by ${user.fullname}`,
    sheets: [
      {
        title: 'Site Records',
        headings: generateHeadersFromColumns(siteRecordsColumns()),
        content: generateDataFromColumnsAndData({
          columns: siteRecordsColumns(),
          data: computedReport.value || [],
        }),
      },
    ],
  }
}

export default generateSiteRecordsReport
