import requests
import sys
from requests_kerberos import HTTPKerberosAuth, OPTIONAL
kerberos_auth = HTTPKerberosAuth(mutual_authentication=OPTIONAL)

def main(url):
    r = requests.get(url,auth=kerberos_auth,verify=False)
    return r.json()


