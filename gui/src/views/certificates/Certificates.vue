<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CTableWrapper :items="certificates" :fields="fields">
          <template #header>
            <CIcon name="cil-grid"/> All Certificates
          </template>
        </CTableWrapper>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from '../../components/Table.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  created() {
    console.log('Certificates Component has been created')
  },
  mounted() {
    console.log('Certificates Component has been mounted')
    this.getCertificates()
  },
  data() {
    return {
      certificates: [],
      fields: ['arn', 'domainName', 'issuedat', 'syncstatus', 'status', 'RenewalEligibility']
    }
  },
  name: 'Certificates',
  components: { CTableWrapper },
  methods: {
    async getCertificates() {

      const certConfig = {
        method: 'get',
        url: 'http://localhost:5000/api/certificates/?page=1&page_size=100'
      }
      const response = await axios(certConfig);
 
      //this is here until i can figure out how to show a nested object for a column
      for(var cert in response.data.page){
        var res = response.data.page[cert]

        this.certificates.push({
          "arn": res.attributes.CertificateArn,
          "domainName": res.attributes.DomainName,
          "issuedat": res.attributes.IssuedAt,
          "syncstatus": res.status,
          "status": res.attributes.Status,
          "RenewalEligibility": res.attributes.RenewalEligibility
        })
      }
    }

  }
}
</script>