import dayjs, {Dayjs} from 'dayjs'
import 'dayjs/locale/ja'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import locale from 'antd/locale/ja_JP'
import {ConfigProvider, DatePicker, Input, TimePicker, Select, AutoComplete, Button, Form} from "antd"
import {constructionDivisions} from "@/const/construction-divisions";
import {Aubrey} from "next/dist/compiled/@next/font/dist/google";
import {useState} from "react";

export default function Home() {
  dayjs.extend(customParseFormat)
  const date = dayjs()
  const [startTime, setStartTime] = useState(dayjs())
  const [endTime, setEndTime] = useState(dayjs())
  const format = "HH:mm"

  let condicate: [{value: string, label: string}] = []
  constructionDivisions.forEach((label, value) => {condicate.push({value: value, label: label})})

  return (
    <main>
        <div className="flex flex-col container px-64">
            <Form>
                <Form.Item label="名前">
                    <Input style={{width: 300}}></Input>
                </Form.Item>
                <Form.Item label="日付">
                    <ConfigProvider locale={locale}>
                        <DatePicker defaultValue={date}></DatePicker>
                    </ConfigProvider>
                </Form.Item>
                <Form.Item label="作業時間">
                    <TimePicker onChange={(time) => setStartTime(time)} defaultOpenValue={startTime} format={format}></TimePicker>
                    <label className="text-center px-3">:</label>
                    <TimePicker onChange={(time) => setEndTime(time)} defaultOpenValue={endTime} format={format}></TimePicker>
                </Form.Item>
                <Form.Item label="工事区分">
                    <Select options={condicate} style={{width: 200}}></Select>
                </Form.Item>
                <Form.Item label="工事No.">
                    <AutoComplete style={{width:200}}></AutoComplete>
                </Form.Item>
                <Form.Item label="工事名">
                    <AutoComplete style={{width:300}}></AutoComplete>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button htmlType="submit" type="primary">送信する</Button>
                </Form.Item>
            </Form>
        </div>
    </main>
  )
}
