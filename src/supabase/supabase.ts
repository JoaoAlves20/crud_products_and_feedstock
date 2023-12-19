import { createClient } from '@supabase/supabase-js'
// Documento oculto por conta que tem a porta e url para banco
import { DATABASE_URL, DATABASE_KEY } from 'src/configs/config'

export const supabase = createClient(DATABASE_URL, DATABASE_KEY)