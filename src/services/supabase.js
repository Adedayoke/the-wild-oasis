
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://pnntvektwmvtkubgirrp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubnR2ZWt0d212dGt1YmdpcnJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2Mjk2MzAsImV4cCI6MjA0MzIwNTYzMH0.vcfHg67_ntmce4oAcxPrYWUQK9R3877nVIqqpt7MAJw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase